import reactLogo from '../../assets/react.svg';

export default function UsePic() {
    return (
        <>
            {/* 导入本地图片 */}
            <img src={reactLogo} className="logo react" alt="React logo" />

            {/* 导入网络图片 */}
            <img src='https://create-react-app.dev/img/logo.svg' alt='React logo' />
        </>
    );
}