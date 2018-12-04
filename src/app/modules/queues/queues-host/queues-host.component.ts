import {CollectionViewer, SelectionChange} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import { QueuesCaseList } from '../../../core/models/queues-case-list';
import { WipbinsCaseList } from '../../../core/models/wipbins-case-list';
import { MatTableDataSource } from '@angular/material';
import {Component, Injectable, Input} from '@angular/core';
import {BehaviorSubject, merge, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { WipBins } from '../../../core/models/wip-bins';
import { Queues } from '../../../core/models/queues';
import { WipBinsService } from '../../../core/services/wip-bins.service';
import { QueuesService } from '../../../core/services/queues.service';

export class DynamicFlatNode {
  constructor(public item: Object, public level = 1, public expandable = false,
              public isLoading = false) {}
}

export class DynamicDatabase {
  dataMap = new Map<any, any[]>([ ]);

  rootLevelNodes: any[] = ['WIP Bins', 'Queues'];

  setDefaults(){
    this.setChildern('WIP Bins',[]);
    this.setChildern('Queues',['myQueues','All Queues']);
    this.setChildern('myQueues',[]);
    this.setChildern('All Queues',[]);
  }
  setWipBins(wipBinsList){
    console.log(wipBinsList);
    this.setChildern('WIP Bins',wipBinsList);
  }
  setQueues(queuesList){
    this.setChildern('myQueues',queuesList);
  }
  setAllQueues(allQueuesList){
    this.setChildern('All Queues',allQueuesList);
  }
  /** Initial data from database */
  initialData(): DynamicFlatNode[] { 
    return this.rootLevelNodes.map(name => new DynamicFlatNode(name, 0, true));
  }

  setChildern(key,item){
    this.dataMap.set(key,item);
  }

  getChildren(node: any): any[] | undefined {
    return this.dataMap.get(node);
  }

  isExpandable(node: any): boolean {
    return this.dataMap.has(node);
  }
}

@Injectable()
export class DynamicDataSource {

  dataChange = new BehaviorSubject<DynamicFlatNode[]>([]);

  get data(): DynamicFlatNode[] { 
    return this.dataChange.value; 
  }

  set data(value: DynamicFlatNode[]) {
    this.treeControl.dataNodes = value;
    this.dataChange.next(value);
  }

  constructor(private treeControl: FlatTreeControl<DynamicFlatNode>,
              private database: DynamicDatabase) {}

  connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]> {
    this.treeControl.expansionModel.onChange.subscribe(change => {
      if ((change as SelectionChange<DynamicFlatNode>).added ||
        (change as SelectionChange<DynamicFlatNode>).removed) {
        this.handleTreeControl(change as SelectionChange<DynamicFlatNode>);
      }
    });
    return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
  }

  /** Handle expand/collapse behaviors */
  handleTreeControl(change: SelectionChange<DynamicFlatNode>) {
    if (change.added) {
      change.added.forEach(node => this.toggleNode(node, true));
    }
    if (change.removed) {
      change.removed.slice().reverse().forEach(node => this.toggleNode(node, false));
    }
  }

  /**
   * Toggle the node, remove from display list
   */
  toggleNode(node: DynamicFlatNode, expand: boolean) {
    
    const children = this.database.getChildren(node.item);
    const index = this.data.indexOf(node);
    if (!children || index < 0) { // If no children, or cannot find the node, no op
      return;
    }

    node.isLoading = false;

    setTimeout(() => {
      if (expand) {
        const nodes = children.map(name =>
          new DynamicFlatNode(name, node.level + 1, this.database.isExpandable(name)));
        this.data.splice(index + 1, 0, ...nodes);
      } else {
        let count = 0;
        for (let i = index + 1; i < this.data.length
          && this.data[i].level > node.level; i++, count++) {}
        this.data.splice(index + 1, count);
      }
      // notify the change
      this.dataChange.next(this.data);
      node.isLoading = true;
    },0 );
    
  }
}


@Component({
  selector: 'bbw-queues-host',
  templateUrl: './queues-host.component.html',
  styleUrls: ['./queues-host.component.css'],
  providers: [DynamicDatabase]
})
export class QueuesHostComponent {

  wipBinsList : WipBins[]=[];
  queuesList : Queues[]=[];
  allQueuesList : Queues[]=[];

  queuesCaseListData: QueuesCaseList[] = [];
  wipBinsCaseListData : WipbinsCaseList[] = [];

  selectedTyp:QueuesCaseList;


  showSir : any = "i am from sir pending ";
  sirValue : boolean = true;

  displayedColumns: string[] = ['type', 'id', 'special', 'site', 'age', 'Condition', 'status', 'type', 'priority', 'severity', 'title'];
  dataToDisplay = new MatTableDataSource<any>();


  selectedRow: number;
  viewWipBinsWindow=false;
  viewQueuesWindow=false;

  displayScreen(node){

    // if(value == 'WIP Bins'){
    //   this.viewWipBinsWindow = !this.viewWipBinsWindow;
    //   this.viewQueuesWindow = false;
    // }else if(value == 'Queues'){
    //   this.viewQueuesWindow = !this.viewQueuesWindow;
    //   this.viewWipBinsWindow = false;
    // }

  }

  headerInfo:any = {
    "title" : "",
    "node" : ""
  };

  getCaseListFor(node) {
    console.log(node);
    this.dataToDisplay.data = [];
    this.headerInfo.title = node.item.title;
    //Wipbins
    if(node.item.dialogId == 375){
      this.headerInfo.node = 'WipBins ';
      this.viewWipBinsWindow = true;
      this.viewQueuesWindow =false;
      console.log('node.item.objid' + node.item.objid);
      this.wipBinsService.getCasesInWipBin(node.item.objid).subscribe(data => this.wipBinsCaseListData = data);
      console.log('seleted wipbins list item');
    //Queues
    }else if(node.item.dialogId == 376){
      this.headerInfo.node = 'Queues ';
      this.viewQueuesWindow =true;
      this.viewWipBinsWindow = false;
      console.log('node.item.objid' + node.item.objid);
      this.queuesService.getCasesInQueue(node.item.objid).subscribe(data => this.queuesCaseListData = data);
      console.log('seleted queues list item');
    }
  }

  
  constructor(database: DynamicDatabase,
    private wipBinsService: WipBinsService,
    private queuesService: QueuesService) {
    this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new DynamicDataSource(this.treeControl, database);
    database.setDefaults();
    this.dataSource.data = database.initialData();
    database.setQueues([]);//Need to be implemented..
    if(this.wipBinsList.length <= 0) {//get wipbins
      this.wipBinsService.getWipBinsList().then(data=>{
          this.wipBinsList = data;
          database.setWipBins(this.wipBinsList);
          //get all queues
          this.queuesService.getAllQueuesList().then(data => {
            this.allQueuesList = data;
            database.setAllQueues(this.allQueuesList);
            this.dataSource.data = database.initialData();
          });
      });
      
    }
  }

  treeControl: FlatTreeControl<DynamicFlatNode>;

  dataSource: DynamicDataSource;

  getLevel = (node: DynamicFlatNode) => node.level;

  isExpandable = (node: DynamicFlatNode) => node.expandable;

  hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;

}