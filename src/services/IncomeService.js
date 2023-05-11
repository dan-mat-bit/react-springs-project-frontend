import axios from 'axios'

const INCOME_BASE_REST_API_URL = 'http://localhost:8080/api/v1/income';

class IncomeService{

    getAllIncome(){
        return axios.get(INCOME_BASE_REST_API_URL)
    }
}

export default new IncomeService();