interface SummaryCardProps {
  title: string;
  value: string;
  subText: string;
  gradient: string;
  valueColor: string;
}
export const SummaryCard = ({ title, value, subText, gradient, valueColor }: SummaryCardProps) => {
  return (
    <div className={`bg-linear-to-br ${gradient} rounded-lg shadow p-4`}>
      <p className="text-sm text-gray-600">{title}</p>
      <p className={`text-2xl font-semibold mt-1 ${valueColor}`}>{value}</p>
      <p className="text-xs text-gray-500 mt-1">{subText}</p>
    </div>
  );
};
