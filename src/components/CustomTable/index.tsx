import React, { FC } from "react";

import Button from "../Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BodyElement from "./BodyElement";
import HeaderElement from "./HeaderElement";
import { QueryParams } from "../../utils/@types/response";

interface ICustomTableProps {
  links?: any;
  data: any[];
  title: string;
  fields: object;
  sortBy?: string[];
  next?: QueryParams | null;
  previous?: QueryParams | null;
  onRequestData?: (params: QueryParams | null) => void;
}

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  display: flex;
  padding: 15px 0px;
  flex-direction: row;
  margin-bottom: 10px;
  border-bottom: 1px dashed grey;
`;

const DataRowContainer = styled.div`
  display: flex;
  padding: 5px 0px;
  flex-direction: row;
  border-bottom: 1px dotted grey;
`;

const TitleActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ButtonsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  margin: 0px 0px 20px;
  justify-content: flex-end;
`;

const ButtonNext = styled(Button)`
  background-color: aquamarine;
`;

const ButtonPrevious = styled(Button)`
  background-color: palevioletred;
`;

const CustomTable: FC<ICustomTableProps> = ({
  data,
  next,
  title,
  links,
  sortBy,
  fields,
  previous,
  onRequestData,
}) => {
  const [keys, setKeys] = React.useState<string[]>([]);
  const [dataTable, setDataTable] = React.useState<any[]>([]);

  const extractKeysFromFields = (fields: object): void => {
    const extractedKeys = Object.entries(fields).map(([key]) => key);
    setKeys(extractedKeys);
  };

  const generateTitlesFromFields = (fields: object): JSX.Element[] => {
    const sortDataByKey = (key: string): any[] => {
      const compareFn = (a: any, b: any) => {
        var valueA = a[key].toUpperCase();
        var valueB = b[key].toUpperCase();
        if (valueA < valueB) {
          return -1;
        }
        if (valueA > valueB) {
          return 1;
        }
        return 0;
      };
      return dataTable.sort(compareFn);
    };

    return Object.entries(fields).map(([key, value], index) => {
      let shouldSort: boolean = sortBy ? sortBy.includes(key) : false;
      const handleSorter = (key: string) => {
        let sortedData = [...sortDataByKey(key)];
        setDataTable(sortedData);
      };
      return (
        <HeaderElement
          key={index}
          isSorter={shouldSort}
          onClick={() => shouldSort && handleSorter(key)}
        >
          {value}
        </HeaderElement>
      );
    });
  };

  const renderData = (data: any[]): JSX.Element[] => {
    const configureData = (current: any) => {
      return [
        ...keys.map((key, index) => {
          let link: string = links && links[key];
          let [route, linkAttr] = link?.split("/:") || [];
          let linkAttrValue: string = linkAttr && current[linkAttr];

          let value = current[key];
          let fullRoute: string = link && `${route}/${linkAttrValue}`;

          return (
            <BodyElement key={index}>
              {link ? <Link to={fullRoute}>{value}</Link> : <>{value}</>}
            </BodyElement>
          );
        }),
      ];
    };

    const reducer = (b: any, c: any) => [...b, configureData(c)];
    let parsedData: string[][] = data.reduce(reducer, []);

    return parsedData.map((el, k) => (
      <DataRowContainer key={k}>{el.map((data) => data)}</DataRowContainer>
    ));
  };

  React.useEffect(() => {
    const didMount = () => {
      setDataTable(data);
      extractKeysFromFields(fields);
    };
    didMount();
  }, [fields, data]);

  return (
    <>
      <TitleActionsContainer>
        <h1>{title}</h1>
        <ButtonsContainer>
          {previous && onRequestData && (
            <ButtonPrevious onClick={() => onRequestData(previous)}>
              Previous Characters
            </ButtonPrevious>
          )}
          {next && onRequestData && (
            <ButtonNext onClick={() => onRequestData(next)}>
              Next Characters
            </ButtonNext>
          )}
        </ButtonsContainer>
      </TitleActionsContainer>

      <TableContainer>
        <HeaderContainer>{generateTitlesFromFields(fields)}</HeaderContainer>
        {renderData(dataTable)}
      </TableContainer>
    </>
  );
};

export default CustomTable;
