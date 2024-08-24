
export default function createListView(name){
    return {
    //     재사용할 인스턴스(컴포넌트) 욥션들이 들어갈 자리
        name,
        render(createElement){
            return createElement();
        }
    }
}