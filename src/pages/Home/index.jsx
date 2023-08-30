import { RouteContext } from '@ant-design/pro-components';
import { Breadcrumb } from 'antd';

const Home = () => {
  return (
    <RouteContext.Consumer>
      {(value) => {
        const { isMobile, hasHeader, hasSiderMenu, collapsed } = value;
        // 用户的标题
        return (
          <Breadcrumb
            separator=">"
            items={[
              {
                title: value.title,
              }
            ]}
          />
        );
      }}
    </RouteContext.Consumer>
  )

}
export default Home;