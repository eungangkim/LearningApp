export function profile(
  id: number,
  className: string,
  profName: string,
  description: string,
  files: { name: string; uri: string }[]=[]
) {
  return { id, className, profName, description, files };
}

export const list = [
  profile(1, "자료구조", "조행래", "스택과 큐를 다룹니다.", [
    { name: "stack.pdf", uri: "files/stack.pdf" },
    { name: "queue.pdf", uri: "files/queue.pdf" },
  ]),
  profile(2, "데이터 통신", "박영덕", "OSI 7계층 개요", [
    { name: "osi.pdf", uri: "files/osi.pdf" },
  ]),
  profile(3, "자료구조", "조행래", "리스트 구조 복습"),
  profile(4, "데이터 통신", "박영덕", "TCP와 UDP 비교", [
    { name: "tcp-vs-udp.png", uri: "files/tcp-vs-udp.png" },
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


