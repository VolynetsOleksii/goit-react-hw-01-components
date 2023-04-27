export default function TransactionHistory({ items }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>

    //   <section className="statistics">
    //     {title && <h2 className="title">{title}</h2>}
    //     <ul className="stat-list">
    //   {stats.map(({ id, label, percentage }) => (
    //     <li className="item" key={id}>
    //       <span className="label">{label}</span>
    //       <span className="percentage">{percentage}</span>
    //     </li>
    //   ))}
    //     </ul>
    //   </section>
  );
}
