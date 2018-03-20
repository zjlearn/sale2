import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  displayedColumns = ['messageType', 'content', 'time'];
  dataSource = new MatTableDataSource<Message>(Messages);
  messages: Message [];
  messageTypes = MessageTypes;
  constructor() { }

  ngOnInit() {
  }

}

export class Message {
  type: number;
  title: string;
  messageType: string;
  content: string;
  time: number;
  status: number;

  constructor(type: number, title: string, messageType: string, content: string, time: number, status: number) {
    this.type = type;
    this.title = title;
    this.messageType = messageType;
    this.content = content;
    this.time = time;
    this.status = status;
  }
}

export class MessageType {
  type: number;
  desc: string;

  constructor(type: number, desc: string) {
    this.type = type;
    this.desc = desc;
  }
}
export class MessageStatu {
  status: number;
  desc: String;

  constructor(status: number, desc: String) {
    this.status = status;
    this.desc = desc;
  }
}

export const MessageTypes = [
  new MessageType(0, '通知公告'),
  new MessageType(1, '理财消息')
];

export const MessageStatus = [
  new MessageStatu(0, '已读'),
  new MessageStatu(1, '未读')
];
export const Messages = [
  new Message(0, '消息一', '通知公告', '是否 都是 反倒是第三方', 234, 1)
];
