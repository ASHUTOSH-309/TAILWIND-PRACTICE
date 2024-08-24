export const RevenueCard = ({
    title,
    orderCount,
    amount
}) => {

    return <div className="bg-white rounded shadow-sm">

        <div>{title}?</div>
        <div className="flex justify-between">₹ {amount}</div>

        {orderCount ? <div>
            {count} order(s)
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>

        </div> : null}
    </div>
}