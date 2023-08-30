import { ReactComponent as PageNotFoundSvg } from '@/assets/svgs/pageNotFound.svg';
const PageNotFound = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <PageNotFoundSvg style={{
        width: '600px',
        height: '600px',
      }} />
      <span>页面走丢了</span>
    </div>
  )
}

export default PageNotFound;





