import css from "./TransactionHistory.module.css";

const TransactionHistory = ({items}) => {
    return (
        <div>
            <table className={css.TransactionHistoryTable}>
                <thead >
                    <tr>
                    <th className={css.TransactionHistoryTableHead}>Type</th>
                    <th className={css.TransactionHistoryTableHead}>Amount</th>
                    <th className={css.TransactionHistoryTableHead}>Currency</th>
                    </tr>
                </thead>
                <tbody>
                {items.map(item => {
                    return (
                        <tr key={item.id}>
                            <td className={css.TransactionHistoryTableItem}>{item.type}</td>
                            <td className={css.TransactionHistoryTableItem}>{item.amount}</td>
                            <td className={css.TransactionHistoryTableItem}>{item.currency}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionHistory;