import Card from "./Card";

function ProfileCard(props) {
    return (
        <div>
            <Card title="Inje Lee" backgroundColor="#4ea04e">
                <p>안녕하세요, 소플입니다.</p>
                <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
            </Card>

            <Card title="Jiwon Park" backgroundColor="#BEEFFF">
                <p>안녕하세요, 지원입니다.</p>
                <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
            </Card>
        </div>
    );
}

export default ProfileCard;