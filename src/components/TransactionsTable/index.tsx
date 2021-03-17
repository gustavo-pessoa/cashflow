import React from "react";
import { Container } from "./styles";


export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="incomes">$12,000</td>
                        <td>Development</td>
                        <td>2021/02/20</td>
                    </tr>
                    <tr>
                        <td>Rent</td>
                        <td className="expenses">- $5,000</td>
                        <td>Office</td>
                        <td>2021/02/17</td>
                    </tr>
                
                </tbody>
            </table>
        </Container>
    );
}