const projectData = [
    {
        key: 'daon',
        title: "Daon Homepage Renewal",
        desc: '웹페이지만 봐도 여행을 떠나고 싶다! 팬션 전경을 화면 가득 보여주는 것을 중점적으로 리뉴얼한 반응형 웹페이지입니다.',
        term: '20.07 - 20.09',
        skills: ['html5, css3, sass, javascript, jquery'],
        func: 'scrolling, sliding, ajax 등',
        details: 'html5, css3, javascript를 익히기위한 첫 프로젝트였습니다. 팬션 전경을 Fullpage로 보여주기 위해 scrolling과 sliding 기능에 중점을 두었습니다. UI/UX를 염두해 두고 부드러운 화면 전환을 위해 css3 animation기능을 활용했습니다. 또한 서비스와 편의시설 화면을 구현할 때 JSON 형식의 데이터를 XHR객체를 이용해 Ajax 프로그래밍했습니다.',
        img: '/img/daon.jpg',
        live: 'https://maldives0.github.io/daon/',
        git: 'https://github.com/maldives0/daon'
    },
    {
        key: 'map',
        title: "ymillonga map version",
        desc: '오늘은 어디 밀롱가를 갈까?! Kakao Map API를 활용해 Vanilla JS으로 만든 장소검색 서비스입니다.',
        term: '20.10 - 20.11',
        skills: ['html5, css3, sass, javascript'],
        func: '밀롱가 이름으로 장소 검색하고 목록으로 보여주기, 현위치 마커로 표시하기, 여러개 마커에 이벤트 등록하기, 지도확대 Level 바꾸기,  dragging 등',
        details: `vanilla js를 더 깊게 공부하기 위한 두번째 프로젝트였습니다. 밀롱가는 탱고라는 Social Dance를 추는 장소입니다. 서울에 있는 10곳의 밀롱가를 JSON형식의 데이터로 가져와 Kakao map에서 검색할 수 있는 반응형 App을 구현했습니다. 사용자가 검색한 결과를 지도상에 좌표로 변환에 해당 위치에 marker를 표시합니다. 동시에 장소 관련 정보를 리스트로 아래 화면에 보여줍니다. 사용자가 본인의 현 위치를 파악할 수 있도록 GeoLocation을 이용해서 접속 위치를 얻어왔으며 지도의 확대 위치를 변경해 주변의 다른 밀롱가를 확인할 수 있습니다.`,
        img: '/img/ymillonga-map.png',
        live: 'https://maldives0.github.io/ymillonga-map/',
        git: 'https://github.com/maldives0/ymillonga-map'
    },
    {
        key: 'sns',
        title: "ymillonga sns version",
        desc: 'React, Next, Redux, Redux Saga, Express를 이용해 Fullstack으로 만든, 트위터의 기능을 가진 SNS 서비스입니다',
        term: '20.10 - 20.12',
        skills: ['javascript, react, nodejs, nextjs, expressjs, mysql, webpack'],
        func: 'passport.js을 이용한 login, Google/Facebook OAuth, Infinite scrolling, 게시글 작성, 이미지 업로드, 좋아요/댓글/리트윗, 해시태그 검색, 유저 프로필 불러오기, SSR 등',
        details: 'React Hooks를 사용해 만들었으며 Fullstack으로 전체 서비스가 만들어지는 과정을 경험한 세번째 프로젝트입니다. antd design library로 화면을 구현하고 Redux, Redux Saga와 연동한 뒤 백앤드에 node로 서버를 구축했습니다. Next로 SSR를 한 뒤 AWS에 배포하였습니다.',
        img: '/img/ymillonga-sns.png',
        live: 'https://ymillonga.xyz',
        git: 'https://github.com/maldives0/ymillonga-sns'
    },
    {
        key: 'portpolio',
        title: "juyoung's portpolio",
        desc: 'React와 nextjs 그리고 다양한 React package를 이용해 만든 mobile과 pc 반응형 포트폴리오 웹사이트입니다.',
        term: '20.12.3 - 상시 업데이트 중 ',
        skills: ['javascript, react, nextjs'],
        func: 'scrolling, animation, 메세지보내기',
        details: 'antd design library로 화면을 구현하고 react-full-page, aos package를 이용하여 Fullpage scrolling과 animation fade기능을 더해보았습니다. 또한 react-responsive package로 768px을 기준으로 mobile과 pc를 나누는 반응형으로 구현해보았습니다.',
        img: '/img/portpolio.png',
        live: 'https://portpolio-five.vercel.app',
        git: 'https://github.com/maldives0/portpolio'
    },
]

export default projectData;