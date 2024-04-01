import reactLogo from '../../assets/react.svg';

export default function UsePic() {
    return (
        <>
            {/* 导入本地图片 */}
            <img src={reactLogo} className="logo react" alt="React logo" />

            {/* 导入网络图片 */}
            <img src='https://img1.baidu.com/it/u=2079992994,1830113805&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500' alt='React logo' />
        </>
    );
}