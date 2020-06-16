class MainMenu extends Scene implements  eui.UIComponent {

	public startButton:eui.Button;
	public optionButton:eui.Button;
	public quitButton:eui.Button;

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}

	protected onComplete():void
	{
		this.startButton.touchEnabled = true;
		this.quitButton.touchEnabled = true;
		this.optionButton.touchEnabled = true;
		this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onStart,this);
	}

	private onStart():void
	{
		let gameScene:GameScene = new GameScene();
		SceneManager.getInstance().change(gameScene);
	}
	
}