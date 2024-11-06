const Card = ({ onDelete, todo }) => {
  return (
    <div>
      <div>{todo.todo}</div>
      <div>{todo.time}</div>

      <button
        type="button"
        className="deleteButton"
        onClick={() => onDelete(todo.id)}
      >
        x
      </button>
    </div>
  );
};
export default Card;
