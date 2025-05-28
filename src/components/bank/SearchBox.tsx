

function SearchBox() {
    return (
        <div className="bg-white rounded-xl shadow-sm p-4">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Поиск"
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute left-3 top-2.5 text-gray-400">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M15.68 17.182a7.75 7.75 0 0 1-12.427-6.18 7.75 7.75 0 1 1 13.848 4.784l2.718 2.737a1.495 1.495 0 0 1 0 2.116l-.352.36-3.786-3.817Zm1.072-6.18a5.75 5.75 0 1 1-11.498 0 5.75 5.75 0 1 1 11.498 0Z" fill="currentColor" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default SearchBox;
