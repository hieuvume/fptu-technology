import { useTableContext } from "@/provider/TableProvider";

const { Confirm } = require("notiflix");

const DeleteRecordCell = ({ onDelete }) => {
  const { mutate } = useTableContext();
  const onClick = () => {
    Confirm.show(
      "Are you sure?",
      "Delete this record?",
      "Yes",
      "No",
      async function () {
        await onDelete();
        mutate();
      }
    );
  };
  return (
    <button
      type="button"
      className="btn btn-sm btn-warning ml-2"
      onClick={onClick}
    >
      Delete
    </button>
  );
};

export default DeleteRecordCell;
