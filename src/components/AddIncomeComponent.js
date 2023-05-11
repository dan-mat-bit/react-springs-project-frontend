import React, {useState} from 'react'

const AddIncomeComponent = () => {

    const [incomeName, setIncomeName] = useState('')
    const [incomeType, setIncomeType] = useState('')
    const [incomeDate, setIncomeDate] = useState('')

    return (
        <div>
            <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md 3 offset-md3">
                        <h2> Add Income </h2>
                        <div className = "card-body">
                            <form>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddIncomeComponent;