export default function SuccessBox({childern}){
    return (
        <div className="text-center bg-green-100 p-4 rounded-lg border border-green-300">
            {childern}
        </div>
    );
}