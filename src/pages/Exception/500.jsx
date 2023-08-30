import { ReactComponent as ServerExceptionSvg } from '@/assets/svgs/serverError.svg';
const ServerException = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <ServerExceptionSvg style={{
        width: '600px',
        height: '600px',
      }} />
      <span>服务异常</span>
    </div>
  )
}

export default ServerException;