import Image from "next/image";
import ArrowOurward from '/public/arrow_outward.svg';

const ArrowHeading = (data: any) => {
    return (
        <div>
        <span className="flex gap-3 items-center mb-3">
            <h3>
            {data.heading}
            </h3>
            { data.number ?

            <div className="bg-slate-900 w-6 h-6 text-white items-center justify-center flex text-sm pt-1">
            {data.number}
            </div>:
            ""

            }
        </span>
        <Image
        src={ArrowOurward}
        alt="ArrowOurward"
        width={20}
        className='mb-6'
        />
        </div>
    )
}

export default ArrowHeading;