/**
 * Filters an array of objects based on a search query and specified target fields.
 *
 * @param {Array<Object>} data - The array of objects to filter.
 * @param {Object<string, boolean>} targetFields - An object indicating which fields to search within each object.
 * @param {string} searchQuery - The search query to match against.
 * @returns {Array<Object>} - The filtered array of objects.
 *
 * This function iterates over the data array and checks if any of the specified
 * target fields contain the search query. The search is case-insensitive.
 *
 * @throws {Error} If data is not an array.
 * @throws {Error} If targetFields is not an object.
 * @throws {Error} If searchQuery is not a string.
 *
 * @example
 * // Sample data
 * const data = [
 *     { name: 'Alice', job: 'Developer' },
 *     { name: 'Bob', job: 'Designer' },
 *     { name: 'Charlie', job: 'Manager' }
 * ];
 *
 * // Target fields to search within
 * const targetFields = { name: true, job: true };
 *
 * // Search query
 * const searchQuery = 'dev';
 *
 * // Usage
 * const filteredData = filterData(data, targetFields, searchQuery);
 * // Result: [{ name: 'Alice', job: 'Developer' }]
 */
export const filterData = (data, targetFields, searchQuery) => {
    // Validate input parameters
    if (!Array.isArray(data)) {
        throw new Error('Invalid data: data must be an array.');
    }

    if (typeof targetFields !== 'object' || targetFields === null) {
        throw new Error(
            'Invalid targetFields: targetFields must be an object.'
        );
    }

    if (typeof searchQuery !== 'string') {
        throw new Error('Invalid searchQuery: searchQuery must be a string.');
    }

    // If there's no search query, return the original data unfiltered
    if (!searchQuery) {
        return data;
    }

    // Convert the search query to lowercase for case-insensitive comparison
    const lowerCaseQuery = searchQuery.toLowerCase();

    // Filter the data array based on the search query and target fields
    return data.filter((item) =>
        Object.keys(targetFields).some(
            (field) =>
                targetFields[field] &&
                item[field]?.toString().toLowerCase().includes(lowerCaseQuery)
        )
    );
};
