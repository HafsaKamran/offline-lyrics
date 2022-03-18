import { Component } from '@angular/core';
import { Member } from '../interfaces/member'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  private membersBackup: Array<Member>;
  private members: Array<Member> = [
    {
      name    : 'Dongheon',
      position: 'Leader, Main Rapper, Main Dancer, Center',
      desc    : 'Leader',
      picture : 'assets/members/dongheon.png',
      age     : 26
    },
    {
      name    : 'Hoyoung',
      position: 'Lead Rapper, Lead Dancer',
      desc    : 'Lead Rapper',
      picture : 'assets/members/hoyoung.png',
      age     : 23
    },
    {
      name    : 'Minchan',
      position: 'Lead Vocalist, Visual',
      desc    : 'Lead Vocalist',
      picture : 'assets/members/minchan.png',
      age     : 23
    },
    {
      name    : 'Gyehyeon',
      position: 'Lead Vocalist',
      desc    : 'Lead Vocalist',
      picture : 'assets/members/gyehyeon.png',
      age     : 22
    },
    {
      name    : 'Yeonho',
      position: 'Main Vocalist',
      desc    : 'Main Vocalist',
      picture : 'assets/members/yeonho.png',
      age     : 21
    },
    {
      name    : 'Yongseung',
      position: 'Main Dancer, Vocalist',
      desc    : 'Main Dancer',
      picture : 'assets/members/yongseung.png',
      age     : 21
    },
    {
      name    : 'Kangmin',
      position: 'Lead Dancer, Vocalist, Visual, Maknae',
      desc    : 'Maknae',
      picture : 'assets/members/kangmin.png',
      age     : 18
    }
  ];

  constructor() {
    this.membersBackup = this.members;
  }

  private clickfun(name: string) {
    console.log(name);
  }

  private filterList(event: any) {
    let searchTerm: string = event.detail.value;

    this.members = this.membersBackup.filter(member => {
      if (!searchTerm) {
        return this.membersBackup;
      }
      if (member.name && searchTerm) {
        return (member.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }
}
