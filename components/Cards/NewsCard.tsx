import Image from "next/image"

type Props = {
  imageSrc: string
  alt: string
  title: string
  description: string
  date: string
  newsSource: string
}
const NewsCard: React.FC<Props> = ({
  imageSrc,
  alt,
  title,
  description,
  date,
  newsSource,
}) => {
  return (
    <div className="Card p-4 bg-neutral-200 bg-opacity-5 rounded-2xl border border-white border-opacity-10 flex-col justify-start items-start inline-flex">
      <div className="Cardmedia w-full flex-col justify-start items-start flex">
        <div className="LibraryPlaceholderImage relative w-full bg-black bg-opacity-5 justify-center items-start inline-flex">
          <Image
            className="rounded-lg"
            src={imageSrc}
            alt={alt}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      <div className="Cardheader py-4 justify-center items-start inline-flex">
        <div className="Content grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
          <div className="EternalCryptWizardryBcSignsPartnershipWithSoutheastAsiaGameGuildGarudaGuildGames text-white text-base font-bold leading-normal tracking-tight">
            {title}
          </div>
          <div className="DividerHorizontal h-px border border-white border-opacity-10 flex-col justify-start items-start flex">
            <div className="MinHeight w-px h-px relative" />
          </div>
          <div className="GggEnvoyPortalThePioneerOfTheWeb3PaymentSolution opacity-40 text-white text-sm font-normal leading-tight tracking-tight">
            {description}
          </div>
        </div>
      </div>
      <div className="Description w-full justify-end items-start inline-flex gap-2">
        <div className="Month text-white text-xs font-normal leading-none tracking-tight">
          {date}
        </div>
        <div className="Publisher text-white text-xs font-normal leading-none tracking-tight">
          {newsSource}
        </div>
      </div>
    </div>
  )
}

export default NewsCard
