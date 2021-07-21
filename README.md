# Tradir.io FrontEnd Coding Test

### 프론트엔드 주니어 엔지니어 지원자 박수호😀

> 요구사항 분석(필수)

1. Redirect users to `/home` when they first arrive
    - 처음 사용자가 접속했을때, /home으로 리다이렉션을 구현하였습니다.
2. Create a Link to a `/beerlist` page on the homepage
    - /beerlist 페이지를 생성하여 링크를 활성화 하였습니다. /home, /beerlist 에서 서로 페이지 이동이 가능합니다.
3. Create a page with a table for the list of Beers (material table can be used [https://material-table.com/#/docs/get-started](https://material-table.com/#/docs/get-started))
    - /beerlist 페이지를 생성하여 링크를 활성화 하였습니다. /home, /beerlist 에서 서로 페이지 이동이 가능합니다.

   3-1.  when a column header is drag and dropped, the new column order should be stored in    redux so that the order is maintained even when a user moves between `/home` and `/beerlist`

    - material table의 헤더를 드래그앤 드랍하여 순서를 바꿀수는 있었으나 Redux의 사용법이 원할 하지 못해 페이지 전환후에도 열 순서를 저장시킬 수 없었습니다.
4. When a beer name is clicked on, a modal should appear containing all the info of the selected beer
    - 표에는 맥주번호, 이름 그리고 알콜도수만 나타나게 했습니다. 상세정보는 맥주이름에 하이퍼링크를 걸어 모달을 통해 모든 정보를 보여질 수 있도록 구현 하였습니다.
5. Create a filter so that users can filter the beers by `abv` range ex)"5-6", "6-7"
    - 보자마자 select-option 기능을 생각 했습니다. material-ui의 Select-MenuItem을 통해 기능을 구현하였습니다. 단위는 1단위로 ex) 1.00~1.99 소수점 두자리까지 범위를 설정해 구현하였습니다.

   5-1.  multiselection should be available

    - 솔직히 말씀드리면 문서를 작성하면서 요구사항 잘못 파악한 것을 확인했습니다. 애초에 체크박스로 구현했다면 시간 내에 구현했을 것 같습니다. 요구사항 분석을 하면서 확인 실수를 했던게 화근이었던것 같습니다. 요구사항을 철저히 숙지하지 못하여 다중선택을 구현하지 못한 점 죄송합니다.

> 요구사항 분석(옵션)

6. Create a Shopping basket to add and remove beers from
   Shopping basket should be accessible from both /home and /beerlist
    - select를 사용하고 장바구니 아이콘을 클릭하면 데이터의 개수를 alert 로 표현하였습니다.
    - 아쉬움이 많이 남았던 장바구니 기능 구현이었습니다. 기한 내에  꼭 완성 시키고 싶었지만, 처음 해보는 기능이라 학습의 시간도 필요했습니다. 그래서 기능 구현을 하지 못했습니다. 다만, Redux에 대해 조금 더 이해하고 공부할 수 있는 시간이었으며 어렵게만 느껴졌던 Redux의 이해를 높일 수 있던 값진 시간이었습니다. 이는 요구사항 3번에서도 똑같이 생각되었습니다.

> 마치며...



이번 개발자 테스트를 통해 저의 부족한 점을 알게 되었습니다.

특히, Redux의 이해도와 사용에 익숙하지 않았습니다.

그래서 주어주신 기한동안 요구사항 3-1번과 6번을 제대로 구현해내지 못했습니다.

이 기회를 발판삼아 Reduxd의 정확한 이해와 사용법을 공부를 통해 노력하겠습니다.

코딩테스트를 볼 수 있게 기회를 주셔서 진심으로 감사드립니다.

박수호 드림.