'use client';

const ButtonExportPDF = (handlePrint) => {
    return (
        <div className="text-center mt-6">
                <button
                    onClick={handlePrint}
                    className="px-4 py-2 bg-background text-white rounded-lg shadow-md"
                >
                    Download as PDF
                </button>
            </div>
    );
};
export default ButtonExportPDF;