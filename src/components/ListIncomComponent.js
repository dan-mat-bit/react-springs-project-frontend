import React, { useEffect, useState, Link} from 'react'
import IncomeService from '../services/IncomeService'

const ListIncomComponent = () => {
    
    const [incomes, setIncome] = useState([])
    
    useEffect(() => {
        IncomeService.getAllIncome().then((response) => {
            setIncome(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, [])

    return (
        <div className = "container">
            <h2 className = "text-center"> List of Income </h2>
            <Link to = "/add-income" className = "btn btn-primary mb-2"> Add Income </Link>
            <table className = "table table-bordered table-striped">
                <thead>
                    <tr>
                        <th> Income ID </th>
                        <th> Incomes Name </th>
                        <th> Incomes Type </th>
                        <th> Incomes Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        incomes.map(
                            income =>
                            <tr key = {income.id}>
                                <td> {income.id} </td>
                                <td> {income.name} </td>
                                <td> {income.type} </td>
                                <td> {income.date} </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListIncomComponent;