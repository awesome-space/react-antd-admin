import { ReactComponent as LoginSvg } from '@/assets/svgs/noAuth.svg';

const NoAuth = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <LoginSvg style={{
        width: '600px',
        height: '600px',
      }}/>
      <span>暂无权限访问</span>
    </div>
  )
}


export default NoAuth;