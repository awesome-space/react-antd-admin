import { RouteContext } from '@ant-design/pro-components';
import { Breadcrumb as AntdBreadcrumb } from 'antd';

const Breadcrumb = ({ className }) => {
  return (
    <RouteContext.Consumer>
      {(value) => {
        const { isMobile, hasHeader, hasSiderMenu, collapsed } = value;
        // 用户的标题
        return (
          <AntdBreadcrumb
            className={className}
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
export default Breadcrumb;