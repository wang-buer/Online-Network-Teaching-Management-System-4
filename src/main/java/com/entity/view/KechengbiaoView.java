package com.entity.view;

import com.entity.KechengbiaoEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 课程表
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2021-03-11 22:14:28
 */
@TableName("kechengbiao")
public class KechengbiaoView  extends KechengbiaoEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public KechengbiaoView(){
	}
 
 	public KechengbiaoView(KechengbiaoEntity kechengbiaoEntity){
 	try {
			BeanUtils.copyProperties(this, kechengbiaoEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
