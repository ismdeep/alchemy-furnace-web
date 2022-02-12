import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-resources-resources-view',
  templateUrl: './resources-view.component.html',
  styles: [
    `
      .demo-chart {
        height: 80vh;
      }
    `,
  ],
})
export class ResourcesResourcesViewComponent implements OnInit {
  chartOption: EChartOption;
  categories = [];
  constructor(private http: _HttpClient) {}
  ngOnInit() {
    for (let i = 0; i < 9; i++) {
      this.categories[i] = {
        name: '类目' + i,
      };
    }

    this.http.get('/assets/gexf.json').subscribe((res) => {
      this.setOption(res);
    });
  }

  setOption(graph) {
    this.chartOption = {
      title: {
        text: 'Les Miserables',
        subtext: 'Default layout',
        top: 'bottom',
        left: 'right',
      },
      tooltip: {},
      legend: [
        {
          // selectedMode: 'single',
          data: this.categories.map((a) => {
            return a.name;
          }),
        },
      ],
      animationDuration: 1500,
      animationEasingUpdate: 'quinticInOut',
      series: [
        {
          name: 'Les Miserables',
          type: 'graph',
          layout: 'none',
          data: graph.nodes,
          links: graph.links,
          categories: this.categories,
          roam: true,
          focusNodeAdjacency: true,
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 1,
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.3)',
          },
          label: {
            position: 'right',
            formatter: '{b}',
            normal: {
              show: true,
              textStyle: {
                fontSize: 20,
                fontWeight: 600,
              },
            },
          },
          lineStyle: {
            color: 'source',
            curveness: 0.3,
          },
          emphasis: {
            lineStyle: {
              width: 10,
            },
          },
        },
      ],
    };
  }
}
