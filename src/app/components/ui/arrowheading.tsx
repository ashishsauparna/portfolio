import Image from "next/image";
import ArrowOurward from '/public/arrow_outward.svg';
import ButtonSmall from "./button_small";

const ArrowHeading = (data: any) => {
    return (
        <div>
        <span className="flex gap-3 items-center mb-3">
            <h3 className=" text-3xl font-recoleta text-slate-800">
            {data.heading}
            </h3>
            { data.number ?

            <div className="bg-slate-900 w-6 h-6 text-white font-bold items-center justify-center flex text-base pt-[2px] -mt-2">
            {data.number}
            </div>:
            ""

            }
            { data.buttonName ?

            <ButtonSmall href={data.buttonHref} name={data.buttonName}/>:
            ""

            }
        </span>
        {
            data.arrow ?
            <Image
                src={ArrowOurward}
                alt="ArrowOurward"
                width={20}
                className='mb-6'
            />:
            
            ""
        }
        </div>
    )
}

export default ArrowHeading;