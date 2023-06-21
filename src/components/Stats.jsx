const Stats = ({ numOfItems, numOfPackedItems }) => {
  const percent = Math.round((numOfPackedItems / numOfItems) * 100);

  return (
    <footer className='stats'>
      <em>
        {numOfItems > 0
          ? ` 💼 You have ${numOfItems} items on your list, and you already packed ${numOfPackedItems} (${percent}%)`
          : ` Start adding some items to your list 🤩✨`}
      </em>
    </footer>
  );
};
export default Stats;
