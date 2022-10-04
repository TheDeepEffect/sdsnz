import React from "react";

type CoulumnDataPropType = {
    columnData: string[][]
}
export default function ColumnData(props: CoulumnDataPropType) {
    const { columnData } = props;
    return <table
        className="columnData"
    >
        <tbody>
            {
                React.Children.toArray(
                    columnData.map((row: string[]) => {
                        return <tr>
                            {
                                React.Children.toArray(
                                    row.map(cell => <td>{cell}</td>)
                                )
                            }
                        </tr>
                    })
                )
            }
        </tbody>
    </table>
}