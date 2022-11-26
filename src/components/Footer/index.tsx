import { UNIVERSITY_LINK } from '@/constants';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';
const Footer: React.FC = () => {
  const defaultMessage = '无为出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'University',
          title: '校园官网',
          href: UNIVERSITY_LINK,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true,
        },
        {
          key: 'library',
          title: '图书馆',
          href: 'http://172.16.47.84/',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
