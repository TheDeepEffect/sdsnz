import React from "react";
import styles from "./../../styles/Table.module.css";

export default function Table(tableData: TableDataProps) {
    const parseHeaders = (tableData: any) => {
        return (
            <tr>
                {React.Children.toArray(Object.keys(tableData).map((key) => {
                    if (Array.isArray(tableData[key])) {
                        return <th>{key}</th>;
                    } else {
                        const subKeys = Object.keys(tableData[key]);
                        return (
                            <th colSpan={subKeys.length}>
                                <tr>
                                    <th colSpan={subKeys.length}>{key}</th>
                                </tr>
                                {parseHeaders(tableData[key])}
                            </th>
                        );
                    }
                }))}
            </tr>
        );
    };

    const header = parseHeaders(tableData);

    const parseRowsFromKeys = (tableData: any, rows: any = []) => {
        const keys = Object.keys(tableData);
        keys.forEach((key) => {
            const data = tableData[key];
            if (Array.isArray(data)) {
                // we add columns to rows
                data.forEach((cell, i) => {
                    // using ros[i] as in leaves data is stored in columned manner.
                    if (!rows[i]) {
                        rows[i] = [];
                    }
                    if (Array.isArray(cell)) {
                        cell.forEach((_, iColIndex) => {
                            rows[iColIndex].push(cell[i]);
                        });
                    } else {
                        rows[i].push(cell);
                    }
                });
            } else {
                // we go further in object
                parseRowsFromKeys(data, rows);
            }
        });
        return rows;
    };

    return (
        <table className={styles.table}>
            <thead>{header}</thead>
            <tbody>
                {
                    React.Children.toArray(
                        parseRowsFromKeys(tableData).map((row: any) => {
                            return <tr>
                                {
                                    React.Children.toArray(
                                        row.map((cell: any) => <td>{cell}</td>)
                                    )
                                }
                            </tr>
                        })
                    )
                }
            </tbody>
        </table>
    );
};


type TableDataProps = {
    [key: string]: string[] | TableDataProps
}