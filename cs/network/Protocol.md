# 통신 프로토콜

## 프로토콜이란?

여러 컴퓨터 사이나 중앙컴퓨터와 단말기 사이에서 데이터 통신을 원활하게 하기 위해 필요한 통신 규약.
신호 송신의 순서, 데이터의 표현법, 오류 검출법등을 정함.

## 프로토콜의 기본 요소

| 기본요소       | 설명                                                    |
| -------------- | ------------------------------------------------------- |
| 구문(Syntax)   | 송수신 데이터 형식, 코딩, 신호 레벨 등 규정             |
| 의미(Semantic) | 제어 정보로 조정과 에러 처리를 위한 규정                |
| 타이밍(Timing) | (시스템 간 정보 전송을 위한) 속도 조절과 순서 관리 규약 |

## 프로토콜 특징

단편화, 재조립, 캡슐화, 연결 제어, 오류 제어, 동기화, 다중화, 주소 지정

## 프로토콜 계층 구성

OSI 7계층 표준 모델 : Physical, DataLink, Network, Transport, Session, Presentation, Application
TCP/IP 모델 : NetworkInterface, Internet Layer, Transport Layer, Application Layer

## 프로토콜 종류

| 계층                  | 프로토콜                              |
| --------------------- | ------------------------------------- |
| 응용(Application)     | HTTP, SMTP, FTP, Telnet               |
| 표현(Presentation)    | ASCII, MPEG, JPEG, MIDI               |
| 세션(Session)         | NetBIOS, SAP, SDP, NWLink             |
| 전송(Transport)       | TCP, UDP, SPX                         |
| 네트워크(Network)     | IP, IPX                               |
| 데이터링크(Data Link) | Ethernet, Token Ring, FDDI, AppleTalk |
| 물리(Physical)        | 없음                                  |

## 전송 프로토콜(= 네트워크 프로토콜)

통신 프로토콜은 컴퓨터나 원거리 통신 장비 사이에서 주고받는 양식과 규칙

### TCP (Transmissioin Control Protocol)

TCP는 전송 제어 프로토콜. IP 네트워크의 두 컴퓨터 간의 연결 지향 통신을 위한 전송 계층 호스트 간 프로토콜. TCP는 가상포트를 사용하여 두 컴퓨터간의 물리적 연결을 재사용할 수 있는 가상 종단 간 연결을 만듬.
보통 하위 계층에서 사용하는 IP와 엮어서 TCP/IP로 표현한다.
