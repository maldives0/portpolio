const projectData = [
    {
        key: 'daon',
        title: "Daon Homepage Renewal",
        desc: '웹페이지만 봐도 여행을 떠나고 싶다!를 컨셉으로 팬션 전경을 화면 가득 보여주는 것을 중점적으로 리뉴얼한 반응형 웹페이지입니다.',
        term: '2020.07.09 - 2020.09.28',
        skills: ['html5, css3, sass, javascript, jquery, git'],
        func: 'Fullpage로 scrolling하기, 자동 sliding하기, scroll과 slide에 carousel 적용하기, modal창 띄우기, Ajax 통신으로 JSON데이터 업로드하기 등',
        details: ` 이론으로 배운 html5, css3, javascript, git을 익히기위한 첫 프로젝트였습니다. 이 프로젝트를 진행하며 이 프로젝트를 진행하며 웹브라우저를 프로그래밍적으로 제어하기 위해 순수 javascript을 이용하는 법과 jquery라는 라이브러리를 활용하는 두 가지 방법을 익힐 수 있었습니다. 훗날 제가 짠 코드를 보며 class이름이나 변수명이 해당기능을 잘 설명해주지 못하고 있는 점, git에 commit 메세지를 해당 작업에 맞게 적어주지 못한 점이 해당 서비스를 유지보수하는 데 있어서 문제가 된다는 점을 깨닫고 다음 프로젝트부터는 이 부분에 신경을 쓰려고 노력했습니다. 
         `,
        img: '/img/daon.jpg',
        live: 'https://maldives0.github.io/daon/',
        git: 'https://github.com/maldives0/daon'
    },
    {
        key: 'map',
        title: "ymillonga map version",
        desc: '`오늘은 어디 밀롱가를 갈까?!`를 콘셉으로 Kakao Map API를 활용해 만든 장소검색 서비스입니다.',
        term: '2020.10.14 - 2020.10.27',
        skills: ['html5, css3, sass, javascript, git'],
        func: '밀롱가 이름으로 장소검색하고 결과값을 마커로 표시하고 지도 아래에는 목록으로 보여주기, geolocation으로 얻어온 사용자의 현위치 마커로 표시하기, 여러개 마커에 이벤트 등록하여 마커 이미지 변환/인포윈도우 표시하기, 지도확대 Level 바꾸기 등',
        details: ` 밀롱가는 탱고라는 Social Dance를 추는 장소입니다. 서울에 있는 10곳의 밀롱가를 JSON형식의 데이터로 가져와 Kakao map에서 검색할 수 있는 반응형 App을 구현했습니다. 이 프로젝트를 통해 무엇보다 javascript의 실행 context를 파악하는 연습을 할 수 있었습니다. 
         사용자가 본인의 현 위치를 파악할 수 있도록 GeoLocation을 이용해서 얻어온 접속 위치를 검색한 결과 좌표와 함께 연결하는 과정에서 (1) json 데이터를 검색하는 함수, (2) map의 중심좌표를 이동시키고 마커를 표시하는 함수, (3) 마커에 여러 개의 Event를 등록하는 함수, 그리고 (4) 사용자의 현 위치를 파악해 좌표로 표시하는 총 4개의 함수를 서로 연결시켜야했기 때문입니다.
         `,
        img: '/img/ymillonga-map.png',
        live: 'https://maldives0.github.io/ymillonga-map/',
        git: 'https://github.com/maldives0/ymillonga-map'
    },
    {
        key: 'sns',
        title: "ymillonga sns version",
        desc: 'React, Next, Redux, Redux Saga, Express를 이용해 Fullstack으로 만든, 트위터의 기능을 가진 SNS 서비스입니다',
        term: '2020.11.13 - 2020.12.22',
        skills: ['javascript, react, nodejs, nextjs, expressjs, mysql, webpack'],
        func: 'Google/Facebook OAuth를 이용해 login하기, Infinite scrolling, 게시글 작성/수정/삭제, 게시글에 이미지 업로드하기, 좋아요/댓글/리트윗, 해시태그 검색하기, 사용자 프로필 불러오기, 팔로잉한 게시글만 불러오기, 탈퇴하기, SSR, lambda를 이용한 image resizing 등',
        details: '서비스의 처음부터 배포까지 모두 경험해보고 싶은 욕심에서 시작한 프로젝트였습니다. React Hooks를 사용해 만들었으며 Fullstack으로 전체 서비스가 만들어지는 과정을 경험한 세번째 프로젝트입니다. antd design과 emotion 라이브러리로 화면을 구현하고 Redux, Redux Saga와 연동하여 총 27가지의 sns 기능별 case를 만들보았습니다. 빠른 데이터 fetching이 필요한 부분은 SWR을 사용했습니다. 백앤드에서는 express와 mysql로 서버를 구축했습니다. Next로 SSR를 한 뒤 AWS에 배포하는 과정까지 진행해보았습니다. 프로젝트를 진행하며 서비스의 처음부터 배포까지 직접 경험해본 것이 프론트엔드 개발자의 직무와 역량에 대한 이해도를 높히는데 큰 도움이 되었습니다.',
        img: '/img/ymillonga-sns.png',
        live: 'https://ymillonga.xyz',
        git: 'https://github.com/maldives0/ymillonga-sns'
    },
    {
        key: 'portpolio',
        title: "juyoung's portpolio",
        desc: 'React와 nextjs 그리고 다양한 React package를 이용해 만든 mobile과 pc 반응형(768px 기준) 포트폴리오 웹사이트입니다.',
        term: '2020.12.05 - 2020.12.22',
        skills: ['javascript, react, nextjs, git'],
        func: 'antd design library로 화면 구현하기, react-full-page의 custom control기능을 사용해  화면 scrolling과 메뉴 탭 연동하기, aos를 이용해 fade 효과 주기, react-responsive를 이용해 mobile과 pc(768px 기준)로 반응형 구현하기 등',
        details: 'react hooks를 익히기 위한 side 프로젝트였습니다. useState(), useCallback(), useEffect(), useRef()와 같은 react hooks들이 어떤 상황에서 쓰여야하는지 고민하면서 각 hook들의 차이를 이해할 수 있었습니다. 이렇게 이해한 바를 react로 화면을 구현하는데 도움을 주는 다양한 packages를 사용해보면서 여러 방법으로 응용볼 수 있었습니다. 포트폴리오라는 프로젝트의 특성상 제 자신을 효과적으로 전달하기 위한 화면을 구현할 수 있는 방법을 찾으며 여러 packages를 직접 고르고 사용법을 익혀보는 시간을 가질 수 있었습니다. 이러한 경험이 앞으로 어떤 프로젝트에서든 그 프로젝트의 종류에 맞는 기능들을 스스로 찾고 활용해볼 수 있다는 자신감을 갖게 해주었습니다.',
        img: '/img/portpolio.png',
        live: 'https://portpolio-five.vercel.app',
        git: 'https://github.com/maldives0/portpolio'
    },
]

export default projectData;