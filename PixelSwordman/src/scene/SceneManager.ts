/**
 *  管理Scene之间的切换
 */

class SceneManager
{
    public static instance: SceneManager;
    public rootLayer:eui.UILayer;//起始场景
    private currentScene:Scene;//需要显示的场景
    private popScene:Scene;//弹出场景层

    private constructor()
    {
        
    }

    public static getInstance(): SceneManager
    {
        if(SceneManager.instance == null)
        {
            SceneManager.instance = new SceneManager();
        }
        return SceneManager.instance;
    }

    public change(s:Scene){
        if(this.currentScene){
           this.rootLayer.removeChild(this.currentScene);
            this.currentScene = null;
        }
        this.rootLayer.addChild(s);
        this.currentScene = s;
    }

    public push(s:Scene){
        this.pop();
        if(!this.popScene){
            this.rootLayer.addChild(s);
            this.popScene = s;
        }
    }
    //关闭场景层
    public pop(){
        if(this.popScene){
            this.rootLayer.removeChild(this.popScene);
            this.popScene = null;
        }
    }
}