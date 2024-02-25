export class TimeSch {
    constructor() {
        //문장, 어법
        this.sch = [
            ['~ 07:00',         '기상', '기상', '기상', '기상', '기상', '기상', '기상'],
            ['07:00 ~ 07:30',   '단어', '단어', '단어', '단어', '단어', '', ''],
            ['09:00 ~ 09:50',   '미적분','한국사', '영어 어법', '지구', '객지프', '', ''],
            ['10:00 ~ 10:50',   '미적분', '한국사', '영어 문장', '지구', '영어 어법', '', ''],
            ['11:00 ~ 11:50',   '정수론', '영어', '미적분', '정수론', '영어 문장', '', ''],
            ['12:00 ~ 12:50',   '영어 어법', '영어', '미적분', '정수론', '음악', '', ''],
            ['12:50 ~ 13:40',   '점심', '점심', '점심', '점심', '점심', '', ''],
            ['13:40 ~ 14:30',   '독서', '객지프', '', '', '', '', ''],
            ['14:40 ~ 15:30',   '독서', '객지프', '', '', '', '', ''],
            ['15:40 ~ 16:30',   '영어', '', '체육', '', '한국사', '', ''],
            ['17:00 ~ 18:00',   '언매', '언매', '언매', '언매', '언매', '', ''],
            ['18:00 ~ 19:00',   '저녁', '저녁', '저녁', '저녁', '저녁', '', ''],
            ['19:00 ~ 21:00',   '영어 글', '영어 글', '영어 글', '영어 글', '영어 글', '', ''],
            ['21:30 ~ 23:30',   '독문', '독문', '독문', '독문', '독문', '', ''],
            ['24:00 ~ 01:00',   '뉴런', '수분감', '뉴런', '수분감', '뉴런', '', ''],
            ['01:00 ~',         '수면', '수면', '수면', '수면', '수면', '수면', '수면'],
        ];

        this.sch_color = {
            '기상' : 'Cfa9139',
            '점심' : 'Cfac739',
            '저녁' : 'Cfab039',
            '자율' : 'Cfa7029',
            '수면' : 'Cfadf39',
        
            '독문' : 'Cfa4157 ',
            '언매' : 'Cfa42c7',
        //     '영어 복습' : 'Cfa5b41',
        
            '뉴런' : 'C52affa',
            '수분감' : 'C527afa',

            '영어 글' : 'C4bfa55',
            '영어 문장' : 'C87fa4a',
            '영어 어법' : 'Cfaf04b',
            '단어' : 'C4bfa90',
            
            '미적분' : 'C999999',
            '정수론' : 'C999999',
            '한국사' : 'C999999',
            '영어' : 'C999999',
            '독서' : 'C999999',
            '객지프' : 'C999999',
            '체육' : 'C999999',
            '지구' : 'C999999',
            '음악' : 'C999999',
            
        };
    }
}