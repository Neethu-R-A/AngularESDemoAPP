import { Component, OnInit } from '@angular/core';
import { ShareserviceService } from '../shareservice.service';

@Component({
  selector: 'app-ipl',
  templateUrl: './ipl.component.html',
  styleUrls: ['./ipl.component.css'],
})
export class IplComponent implements OnInit {
  constructor(private ss: ShareserviceService) {}

  allTeamsList: any = [];
  allSeasonsList: any = [];
  allKindsList: any = [];
  allVenueList: any = [];
  allCityList: any = [];
  allUmpireList: any = [];
  matchesWon: any = [];
  matchWonBySeason: any = [];
  gotKind: any = [];

  selectedTeam: string = '';
  selectedSeason: string = '';
  selectedKind: string = '';

  ngOnInit(): void {
    // Get All Teams
    this.ss.getData('getAllTeams').subscribe((data: any) => {
      this.allTeamsList = data;

      console.log('All Teams List', this.allTeamsList);
    });

    //Get All Seasons
    this.ss.getData('getAllSeason').subscribe((data: any) => {
      this.allSeasonsList = data;

      console.log('All seasons List', this.allSeasonsList);
    });

    //Get All Kind
    this.ss.getData('getAllKind').subscribe((data: any) => {
      this.allKindsList = data;
      this.allKindsList.splice(0, 1);

      console.log('All Kind List', this.allKindsList);
    });

    //Get All Venue
    this.ss.getData('venue').subscribe((data: any) => {
      this.allVenueList = data;

      console.log('All Venue ', this.allVenueList);
    });

    //Get All City
    this.ss.getData('city').subscribe((data: any) => {
      this.allCityList = data;

      console.log('All City ', this.allCityList);
    });

    //Get All Umpire
    this.ss.getData('umpire').subscribe((data: any) => {
      this.allUmpireList = data;

      console.log('All City ', this.allUmpireList);
    });
  }

  getAllTeams() {
    this.ss
      .getMatchesWon('getMatchesWon', { team: this.selectedTeam })
      .subscribe((data: any) => {
        this.matchesWon = data;

        console.log('All matches won', this.matchesWon);
      });
  }

  getMatchesBySeason() {
    this.ss
      .getMatchesBySeason('getMatchesBySeason', {
        team: this.selectedTeam,
        season: this.selectedSeason,
      })
      .subscribe((data: any) => {
        this.matchWonBySeason = data;
      });
  }

  getMatchesWonKindBySeason() {
    this.ss
      .getMatchesBySeason('getMatchesWonKindBySeason', {
        team: this.selectedTeam,
        season: this.selectedSeason,
        kind: this.selectedKind,
      })
      .subscribe((data: any) => {
        this.gotKind = data;
      });
  }
}
