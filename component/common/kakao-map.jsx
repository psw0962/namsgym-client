// eslint-disable-next-line no-unused-vars
/*global kakao*/

import React, { useEffect } from 'react';
import styled from 'styled-components';

/**
 *
 * @param locationData 기본 마커를 띄울 배열
 * @param refreshData 검색한 위치 키워드
 * @param height 지도의 높이
 * @param margin 지도의 마진
 *
 *  */

const KaKaoMap = ({ locationData, refreshData, height, margin }) => {
  const KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY;

  function getMap() {
    // 맵이 담긴 하나의 div가 생성될 수 있게 엘리먼트를 생성합니다.
    const script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.src =
      'https://dapi.kakao.com/v2/maps/sdk.js?appkey=efea0da960f75722be14fa644f4b4312&libraries=services&autoload=false';
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        var mapContainer = document.getElementById('map'),
          mapOption = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 4, // 확대레벨
          };

        var map = new window.kakao.maps.Map(mapContainer, mapOption);

        // 지도 확대 축소를 제어할 수 있는 줌 컨트롤을 생성합니다.
        let zoomControl = new window.kakao.maps.ZoomControl();
        map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

        // 주소 -> 좌표 변환 객체를 생성합니다.
        var geocoder = new window.kakao.maps.services.Geocoder();

        // 주소 -> 좌표 변환 객체를 bounds에 추가하여 평균거리를 확인해 확대레벨을 동적으로 만들어 줍니다.
        var bounds = new window.kakao.maps.LatLngBounds();

        // 키워드로 위치 찾기 함수
        function placesSearchCB(data, status) {
          // 인포윈도우로 장소에 대한 설명을 표시합니다: startPoint location(출발지위치)
          var infowindow2 = new window.kakao.maps.InfoWindow({
            content: `<div style="width:150px;height:20px;line-height:20px;text-align:center;font-size:14px;color: #000;">${
              refreshData?.length > 8
                ? `${refreshData?.slice(0, 8)}...`
                : refreshData
            }</div>`,
          });

          if (status === kakao.maps.services.Status.OK) {
            var keyWordCoords = new window.kakao.maps.LatLng(
              data[0].y,
              data[0].x,
            );

            var marker = new window.kakao.maps.Marker({
              map: map,
              position: keyWordCoords,
            });

            bounds.extend(new kakao.maps.LatLng(data[0].y, data[0].x));
            infowindow2.open(map, marker);

            map.setBounds(bounds);
          }
        }

        // 키워드 위치 찾기 함수 호출
        if (refreshData !== '') {
          var ps = new kakao.maps.services.Places();
          ps.keywordSearch(refreshData, placesSearchCB);
        }

        // 기본 지정위치 함수 호출
        locationData?.map(x => {
          geocoder.addressSearch(x.latlng, function (result, status) {
            // 인포윈도우로 장소에 대한 설명을 표시합니다: default location marker(센터위치)
            var infowindow = new window.kakao.maps.InfoWindow({
              content: `<div style="width:150px;height:20px;line-height:20px;text-align:center;font-size:14px;color: #B49445;">${x.content}</div>`,
            });

            // 정상적으로 검색 완료 시
            if (status === window.kakao.maps.services.Status.OK) {
              var coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x,
              );

              // 결과값으로 받은 위치를 마커로 표시합니다.
              var marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              // bounds에 좌표를 하나씩 추가해 줍니다.
              bounds.extend(coords);

              // 마커위에 윈도우 포인터를 띄웁니다.
              infowindow.open(map, marker);

              // 지도의 마커들을 결과값으로 받은 위치로 이동시킵니다.
              map.setBounds(bounds);
            }
          });
        });
      });
    };
  }

  useEffect(() => {
    getMap();
  }, [refreshData]);

  return (
    <React.Fragment>
      <Maps id="map" height={height} margin={margin} />
    </React.Fragment>
  );
};

export default KaKaoMap;

const Maps = styled.div`
  height: ${props => (props.height ? props.height : '40rem')};
  margin: ${props => (props.margin ? props.margin : '2rem 0')};
  border-radius: 10px;
`;
