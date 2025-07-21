/*
profile -> 게시글에 담겨있는 데이터(*개인정보가 아님*)

추가해야할 데이터{
  -제목
  -key id(과목번호와 통일 가능하진 검토해야함. 통일 가능하다면 기존 id를 사용)
  -
  -
}
*/
export function profile(
  id: number,
  className: string,
  profName: string,
  description: string,
  files: { name: string; uri: string }[]=[]
) {
  return { id, className, profName, description, files };
}
/*
실제 클라우드 서버에 있는 데이터라면?
🔸 Firebase Storage:
https://firebasestorage.googleapis.com/v0/b/YOUR_PROJECT.appspot.com/o/파일명.pdf?alt=media&token=인증토큰
🔸 AWS S3:
https://your-bucket.s3.amazonaws.com/파일명.pdf
🔸 Google Drive (공유된 파일):
https://drive.google.com/uc?id=FILE_ID&export=download
*/
export const list = [
  profile(1, "자료구조", "조행래", "스택과 큐를 다룹니다.", [
    { name: "stack.jpg", uri: "https://i.pinimg.com/736x/ff/bc/d9/ffbcd9d83dce6db87ae78db8ce034ca5.jpg" },//
    { name: "queue.hwd", uri: "files/2cbdb989296bac265ffad95d04a1b6c7.jpg" },
  ]),
  profile(2, "데이터 통신", "박영덕", "OSI 7계층 개요", [
    { name: "osi.pdf", uri: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
  ]),
  profile(3, "자료구조", "조행래", "리스트 구조 복습"),
  profile(4, "데이터 통신", "박영덕", "TCP와 UDP 비교", [
    { name: "tcp-vs-udp.png", uri: "https://www.yu.ac.kr/_attach/f/view.jsp?attach_no=355056" },
  ]),
  profile(5, "자료구조", "조행래", "트리 구조 예제", [
    { name: "tree-example.docx", uri: "files/tree-example.docx" },
  ]),
  profile(6, "데이터 통신", "박영덕", "통신 프로토콜 개요"),
  profile(7, "자료구조", "조행래", "해시테이블 설명", [
    { name: "hashtable.pdf", uri: "files/hashtable.pdf" },
  ]),
  profile(8, "데이터 통신", "박영덕", "LAN과 WAN 차이", [
    { name: "lan-wan.pdf", uri: "files/lan-wan.pdf" },
  ]),
  profile(9, "자료구조", "조행래", "그래프 이론 기초"),
  profile(10, "데이터 통신", "박영덕", "데이터 전송 방식", [
    { name: "serial-vs-parallel.png", uri: "files/serial-vs-parallel.png" },
  ]),
  profile(11, "자료구조", "조행래", "응용 문제 풀이", [
    { name: "quiz.docx", uri: "files/quiz.docx" },
  ]),
  profile(12, "데이터 통신", "김명섭", "보안 통신 이론", [
    { name: "encryption.pdf", uri: "files/encryption.pdf" },
    { name: "vpn.pptx", uri: "files/vpn.pptx" },
  ]),
];


