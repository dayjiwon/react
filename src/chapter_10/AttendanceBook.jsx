// 출석부 출력하기

import React from "react";

const students = [
    {
        id: 1,
        name: "Inje",
    },
    {
        id: 2,
        name: "Steve",
    },
    {
        id: 3,
        name: "Bill",
    },
    {
        id: 4,
        name: "Jeff",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;

/*
{students.map((student) => { // key를 포맷팅 된 문자열로 변경
    return <li key={`student-id-${student.id}`}>{student.name}</li>;
})}

{students.map((student, index) => { // key를 index로 변경
    return <li key={index}>{student.name}</li>;
})}
*/