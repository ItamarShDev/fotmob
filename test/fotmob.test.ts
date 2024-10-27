import { describe, expect, it, vi } from 'vitest';
import Fotmob from '../src/fotmob';
import leagueData from "./data/league.json";
import matchDetailData from "./data/matchDetails.json";
import matchData from "./data/matchesByDate.json";
import playerData from "./data/player.json";
import teamData from "./data/team.json";

let fot = new Fotmob();

fot.getMatchesByDate = vi.fn().mockReturnValue(matchData);
fot.getLeague = vi.fn().mockReturnValue(leagueData);
fot.getTeam = vi.fn().mockReturnValue(teamData);
fot.getPlayer = vi.fn().mockReturnValue(playerData);
fot.getMatchDetails = vi.fn().mockReturnValue(matchDetailData);


describe("getMatchesByDate", () => {
    it('should load match data', async () => {
        const data = await fot.getMatchesByDate("20201020");
        expect(data).toBeDefined();
        expect(data).toBeInstanceOf(Object);
        expect("leagues" in Object(data)).toBeTruthy();
    })
})

describe("getLeague", () => {
    it('should load league data', async () => {
        const data = await fot.getLeague(47, "overview", "league", "America/New_York");
        expect(data).toBeInstanceOf(Object);
        expect(data).toBeDefined();
        expect("tabs" in Object(data));
    })
})

describe("getTeam", () => {
    it('should load team data', async () => {
        const data = await fot.getTeam(6017, "overview", "team", "America/New_York");
        expect(data).toBeInstanceOf(Object);
        expect(data).toBeDefined();
        expect("squad" in Object(data)).toBeTruthy();
    })
})

describe("getPlayer", () => {
    it('should load player data', async () => {
        const data = await fot.getPlayer(688295);
        expect(data).toBeInstanceOf(Object);
        expect(data).toBeDefined();
        expect("name" in Object(data)).toBeTruthy();
    })
})

describe("getMatchDetails", () => {
    it('should load match detail data', async () => {
        const data = await fot.getMatchDetails(3363666);
        expect(data).toBeInstanceOf(Object);
        expect("content" in Object(data)).toBeTruthy();
    })
})