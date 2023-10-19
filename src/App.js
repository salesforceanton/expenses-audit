import ExpensesList from "./components/expensesList/ExpensesList";
import NewCostForm from "./components/newCostForm/NewCostForm";

function App() {
    const costs = [
        {
            date: new Date(),
            title: 'X-Box Series-S',
            amount: 425.50
        },
        {
            date: new Date(),
            title: 'Jagerrmasster',
            amount: 19.99
        },
        {
            date: new Date(),
            title: 'Car repair work',
            amount: 278.50
        }
    ]
    return (
        <div>
            <h2>Expenses Audit</h2>
            <NewCostForm/>
            <ExpensesList data={costs}/>
        </div>
        
    )
    
}

export default App;
