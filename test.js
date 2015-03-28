{
	"parts": [
		{
			"name": 0,
			"size": 6,
			"communities":[[0],[1],[2],[3],[4],[5]],
			"res": 0
		},
		{
			"name": 1,
			"size": 3,
			"communities":[[0,1],[2],[3,4,5]],
			"res": 0.2
		}
	],
	"nodes": [
		{
			"name": 0,
			"group": [0,0,0,0,0,0]
		},
		{
			"name": 1,
			"group": [1,0,0,0,0,0]
		},
		{
			"name": 2,
			"group": [2,1,1,1,1,0]
		},
		{
			"name": 3,
			"group": [3,2,1,1,1,0]
		},
		{
			"name": 4,
			"group": [4,2,1,1,1,0]
		},
		{
			"name": 5,
			"group": [5,2,2,2,1,0]
		},
		{
			"name": 6,
			"group": [6,3,3,2,2,0]
		},
		{
			"name": 7,
			"group": [7,3,3,2,2,0]
		},
		{
			"name": 8,
			"group": [8,4,4,3,2,0]
		},
		{
			"name": 9,
			"group": [9,5,4,3,2,0]
		},
		{
			"name": 10,
			"group": [10,5,5,3,2,1]
		},
		{
			"name": 11,
			"group": [11,6,6,3,3,1]
		}
	],
	"links": [
		{
			"source": 0,
			"target": 1,
			"weight": 1
		},
		{
			"source": 1,
			"target": 2,
			"weight": 2
		},
		{
			"source": 2,
			"target": 3,
			"weight": 3
		},
		{
			"source": 3,
			"target": 4,
			"weight": 4
		},
		{
			"source": 3,
			"target": 1,
			"weight": 5
		},
		{
			"source": 0,
			"target": 2,
			"weight": 6
		},
		{
			"source": 0,
			"target": 5,
			"weight": 6
		},
		{
			"source": 3,
			"target": 10,
			"weight": 4
		},
		{
			"source": 11,
			"target": 5,
			"weight": 5
		},
		{
			"source": 1,
			"target": 7,
			"weight": 6
		},
		{
			"source": 3,
			"target": 8,
			"weight": 6
		},
		{
			"source": 5,
			"target": 9,
			"weight": 5
		},
		{
			"source": 2,
			"target": 10,
			"weight": 6
		},
		{
			"source": 3,
			"target": 6,
			"weight": 6
		}
	]
}
