import { useReadList } from '../../../hooks';

export const RemoveButton = ({ id, className }) => {
    const { deleteValue } = useReadList();

    return (
        <button
            onClick={() => {
                deleteValue(id);
            }}
            className={`bg-[#28b8b8] py-3 border-t-4 border-r-4 text-white border-white rounded-tr-full px-7 shadow-lg shadow-[#53c2c2] font-bold ${className}`}
        >
            Remove
        </button>
    );
};
